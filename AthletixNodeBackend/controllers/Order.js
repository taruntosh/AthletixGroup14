const Order = require("../models/Order");
const User = require("../models/User");
const { sendMail } = require("../utils/Emails");
const { createInvoice } = require("../utils/invoiceGenerator");

exports.create = async (req, res) => {
    try {
        const created = new Order(req.body)
        await created.save()

        const invoice = {
            shipping: {
                name: "Taruntosh",
                address: "299 Doon Valley Drive",
                city: "Kitchener",
                state: "ON",
                country: "CA",
                postal_code: "N2M 3R7"
            },
            items: [
                {
                    item: "Nike Elite Volleyball - Indoor/Outdoor",
                    description: "Sports Volleyball",
                    quantity: 2,
                    amount: 999
                },
                {
                    item: "Adidas Adjustable Dumbbells Set - 20kg",
                    description: "Gym",
                    quantity: 1,
                    amount: 799
                }
            ],
            subtotal: 8000,
            paid: 0,
            invoice_nr: '20241209ONCA'
        };
        const invoicebin = await createInvoice(invoice)

        const existingUser = await User.findById(req.body.user)

        await sendMail(existingUser.email, `Your order has been placed`, `You have placed an order for so and so!. Thank you for the purchase and shop again!`, {
            filename: 'invoice.pdf',
            content: invoicebin
        })
        res.status(201).json(created)

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error creating an order, please trying again later' })
    }
}

exports.getByUserId = async (req, res) => {
    try {
        const { id } = req.params
        const results = await Order.find({ user: id })
        res.status(200).json(results)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error fetching orders, please trying again later' })
    }
}

exports.getAll = async (req, res) => {
    try {
        let skip = 0
        let limit = 0

        if (req.query.page && req.query.limit) {
            const pageSize = req.query.limit
            const page = req.query.page
            skip = pageSize * (page - 1)
            limit = pageSize
        }

        const totalDocs = await Order.find({}).countDocuments().exec()
        const results = await Order.find({}).skip(skip).limit(limit).exec()

        res.header("X-Total-Count", totalDocs)
        res.status(200).json(results)

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error fetching orders, please try again later' })
    }
};

exports.updateById = async (req, res) => {
    try {
        const { id } = req.params
        const updated = await Order.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(updated)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error updating order, please try again later' })
    }
}
