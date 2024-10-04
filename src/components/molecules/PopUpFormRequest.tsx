import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
  IconButton, // Import IconButton for close button
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface RequestFormModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
}

interface FormData {
  startDate: Dayjs | null;
  adults: string;
  children: string;
  singleRooms: string;
  doubleRooms: string;
  tripleRooms: string;
  firstName: string;
  familyName: string;
  phoneNumber: string;
  email: string;
  acceptPolicy: boolean;
}

const RequestFormModal: React.FC<RequestFormModalProps> = ({
  open,
  onClose,
  title,
}) => {
  const [formData, setFormData] = useState<FormData>({
    startDate: null,
    adults: "",
    children: "",
    singleRooms: "",
    doubleRooms: "",
    tripleRooms: "",
    firstName: "",
    familyName: "",
    phoneNumber: "",
    email: "",
    acceptPolicy: false,
  });

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "acceptPolicy" ? checked : value,
    }));
  };

  const handleDateChange = (newValue: Dayjs | null) => {
    setFormData((prevData) => ({
      ...prevData,
      startDate: newValue,
    }));
    setIsCalendarOpen(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  const handleInputFocus = () => {
    setIsCalendarOpen(true);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        fullScreen
        maxWidth="md"
        sx={{
          "& .MuiDialog-paper": {
            width: "60%", // Default width for larger screens
            height: "90%", // Default height for larger screens
            margin: 0,

            display: "flex",
            flexDirection: "column",
            "@media (max-width: 600px)": {
              width: "100%", // Full width for mobile screens
              height: "100%", // Full height for mobile screens
              borderRadius: 0, // Optional: remove border-radius on mobile
            },
          },
        }}
      >
        <DialogTitle
          className=" text-2xl text-center font-dinCondensed"
          sx={{ position: "relative", paddingRight: "40px" }} // Ensure space for close button
        >
          {title}
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", right: 8, top: 8, color: "red" }} // Position "X" button at the top-right corner
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <form
          onSubmit={handleSubmit}
          style={{ flex: 1, display: "flex", flexDirection: "column" }}
        >
          <DialogContent className="space-y-4">
            {/* Date input and calendar */}
            <div className="space-y-2">
              <h3 className="font-semibold">Dates</h3>
              <TextField
                fullWidth
                label="Start Date"
                value={
                  formData.startDate
                    ? formData.startDate.format("MM/DD/YYYY")
                    : ""
                }
                onFocus={handleInputFocus}
              />
              {isCalendarOpen && (
                <DateCalendar
                  value={formData.startDate}
                  onChange={handleDateChange}
                />
              )}
            </div>

            {/* Form fields */}
            <div className="grid grid-cols-2 gap-4">
              <TextField
                select
                fullWidth
                name="adults"
                label="Adults"
                value={formData.adults}
                onChange={handleChange}
              >
                {[...Array(10)].map((_, i) => (
                  <MenuItem key={i} value={i + 1}>
                    {i + 1}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                fullWidth
                name="children"
                label="Children"
                value={formData.children}
                onChange={handleChange}
              >
                {[...Array(10)].map((_, i) => (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <TextField
                select
                fullWidth
                name="singleRooms"
                label="Single"
                value={formData.singleRooms}
                onChange={handleChange}
              >
                {[...Array(5)].map((_, i) => (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                fullWidth
                name="doubleRooms"
                label="Double"
                value={formData.doubleRooms}
                onChange={handleChange}
              >
                {[...Array(5)].map((_, i) => (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                fullWidth
                name="tripleRooms"
                label="Triple"
                value={formData.tripleRooms}
                onChange={handleChange}
              >
                {[...Array(5)].map((_, i) => (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            {/* Personal Information */}
            <div className="space-y-2">
              <h3 className="font-semibold">Personal Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <TextField
                  fullWidth
                  name="firstName"
                  label="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  name="familyName"
                  label="Family Name"
                  value={formData.familyName}
                  onChange={handleChange}
                />
              </div>
              <TextField
                fullWidth
                name="phoneNumber"
                label="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                name="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <FormControlLabel
              control={
                <Checkbox
                  name="acceptPolicy"
                  checked={formData.acceptPolicy}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label="Accept our policy"
            />
          </DialogContent>

          <DialogActions
            className="bg-white z-30"
            sx={{
              justifyContent: "center",
              position: "sticky",
              bottom: 0,
              left: 0,
              right: 0,
              "@media (max-width: 600px)": {
                display: "flex",
                flexDirection: "column",
              },
            }}
          >
            <Button onClick={onClose} color="primary" fullWidth={true}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="bg-blue-600"
              fullWidth={true}
            >
              Send Request
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </LocalizationProvider>
  );
};

export default RequestFormModal;
