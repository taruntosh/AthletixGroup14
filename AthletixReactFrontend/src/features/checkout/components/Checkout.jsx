import {
  FormHelperText,
  Stack,
  TextField,
  Typography,
  Button,
  Menu,
  MenuItem,
  Select,
  Grid,
  FormControl,
  Radio,
  Paper,
  IconButton,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React, { useEffect, useState } from "react";
import { Cart } from "../../cart/components/Cart";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addAddressAsync,
  selectAddressStatus,
  selectAddresses,
} from "../../address/AddressSlice";
import { selectLoggedInUser } from "../../auth/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import {
  createOrderAsync,
  selectCurrentOrder,
  selectOrderStatus,
} from "../../order/OrderSlice";
import { resetCartByUserIdAsync, selectCartItems } from "../../cart/CartSlice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { SHIPPING_COST, TAX_RATE } from "../../../constants";
import { motion } from "framer-motion";

export const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux state selectors
  const addresses = useSelector(selectAddresses);
  const loggedInUser = useSelector(selectLoggedInUser);
  const cartItems = useSelector(selectCartItems);
  const addressStatus = useSelector(selectAddressStatus);
  const orderStatus = useSelector(selectOrderStatus);
  const currentOrder = useSelector(selectCurrentOrder);

  // Local state variables
  const [activeAddress, setActiveAddress] = useState(addresses[0] || null);
  const [paymentMethod, setPaymentMethod] = useState("cash");

  // Calculate total price
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  const orderTotal = cartTotal + SHIPPING_COST + TAX_RATE;

  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down(480));

  // Form control using react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Handle adding a new address
  const handleAddAddress = (formData) => {
    const newAddress = { ...formData, userId: loggedInUser._id };
    dispatch(addAddressAsync(newAddress));
  };

  // Handle order creation
  const handleCreateOrder = () => {
    const newOrder = {
      user: loggedInUser._id,
      items: cartItems,
      shippingAddress: activeAddress,
      paymentMethod,
      totalAmount: orderTotal,
    };
    dispatch(createOrderAsync(newOrder));
  };

  // Side effects for resetting form after successful address submission
  useEffect(() => {
    if (addressStatus === "fulfilled") {
      reset();
    } else if (addressStatus === "rejected") {
      alert("Error while saving the address.");
    }
  }, [addressStatus, reset]);

  // Side effects for handling order completion
  useEffect(() => {
    if (currentOrder?._id) {
      dispatch(resetCartByUserIdAsync(loggedInUser?._id));
      navigate(`/order-success/${currentOrder._id}`);
    }
  }, [currentOrder, dispatch, navigate, loggedInUser]);

  return (
    <Stack
      direction={"row"}
      p={2}
      spacing={4}
      flexWrap={"wrap"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      mb={5}
    >
      {/* Left section: Shipping form */}
      <Stack spacing={4}>
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <motion.div whileHover={{ x: -5 }}>
            <IconButton component={Link} to="/cart">
              <ArrowBackIcon fontSize={isMobileView ? "medium" : "large"} />
            </IconButton>
          </motion.div>
          <Typography variant="h4">Shipping Information</Typography>
        </Stack>

        {/* Shipping Address Form */}
        <Stack
          component={"form"}
          spacing={2}
          onSubmit={handleSubmit(handleAddAddress)}
          noValidate
        >
          {/* Address Fields */}
          {["type", "street", "country", "phoneNumber"].map((field) => (
            <Stack key={field}>
              <Typography gutterBottom>{field}</Typography>
              <TextField
                placeholder={`Enter ${field}`}
                {...register(field, { required: `${field} is required` })}
              />
              {errors[field] && (
                <FormHelperText error>{errors[field]?.message}</FormHelperText>
              )}
            </Stack>
          ))}

          {/* City, State, and Postal Code */}
          <Stack direction={"row"} spacing={2}>
            {["city", "state", "postalCode"].map((field) => (
              <Stack key={field} flex={1}>
                <Typography gutterBottom>{field}</Typography>
                <TextField
                  placeholder={`Enter ${field}`}
                  {...register(field, { required: `${field} is required` })}
                />
                {errors[field] && (
                  <FormHelperText error>
                    {errors[field]?.message}
                  </FormHelperText>
                )}
              </Stack>
            ))}
          </Stack>

          {/* Buttons */}
          <Stack direction={"row"} justifyContent={"space-between"}>
            <LoadingButton
              loading={addressStatus === "pending"}
              type="submit"
              variant="contained"
            >
              Save Address
            </LoadingButton>
            <Button variant="outlined" color="error" onClick={() => reset()}>
              Reset Form
            </Button>
          </Stack>
        </Stack>

        {/* Existing Addresses */}
        <Stack spacing={2}>
          <Typography variant="h6">Choose an existing address</Typography>
          <Grid container spacing={2}>
            {addresses.map((addr, idx) => (
              <Grid item xs={12} md={4} key={addr._id}>
                <Paper elevation={2} sx={{ padding: 2 }}>
                  <Stack direction={"row"} alignItems={"center"}>
                    <Radio
                      checked={activeAddress === addr}
                      onChange={() => setActiveAddress(addr)}
                    />
                    <Typography>{addr.type}</Typography>
                  </Stack>
                  <Typography>{addr.street}</Typography>
                  <Typography>
                    {addr.city}, {addr.state}, {addr.country} -{" "}
                    {addr.postalCode}
                  </Typography>
                  <Typography>{addr.phoneNumber}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Stack>

        {/* Payment Methods */}
        <Stack spacing={2}>
          <Typography variant="h6">Payment Method</Typography>
          <Stack>
            <Radio
              checked={paymentMethod === "cash"}
              onChange={() => setPaymentMethod("cash")}
            />
            <Typography>Cash on Delivery</Typography>
          </Stack>
          <Stack>
            <Radio
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
            />
            <Typography>Credit/Debit Card</Typography>
          </Stack>
        </Stack>
      </Stack>

      {/* Right section: Order summary */}
      <Stack spacing={4} width={isMobileView ? "100%" : "auto"}>
        <Typography variant="h4">Order Summary</Typography>
        <Cart checkout={true} />
        <LoadingButton
          fullWidth
          loading={orderStatus === "pending"}
          variant="contained"
          onClick={handleCreateOrder}
        >
          Place Order
        </LoadingButton>
      </Stack>
    </Stack>
  );
};
