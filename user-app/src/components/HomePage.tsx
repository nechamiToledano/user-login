import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  Tooltip,
  Typography,
  ButtonBase,
} from "@mui/material";
import { StageContext, UserContext } from "./userReducer";
import { Logout, Settings } from "@mui/icons-material";
import { useState, useContext } from "react";

const HomePage = () => {
  const { user, userDispatch } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { stage, setStage } = useContext(StageContext);

  const openMenu = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const userInitials = user ? `${user.firstName?.[0] || ""}` : "";

  return (
    <Box sx={{ position: "absolute", top: 16, left: 16 }}>
      <Tooltip title={`Hello ${user?.firstName || "User"}`}>
        <IconButton
          onClick={handleMenuClick}
          size="small"
          aria-controls={openMenu ? "profile-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
        >
          <Avatar
            sx={{
              width: 55,
              height: 55,
              bgcolor:"lightblue",
              color: "white",
        fontSize:23

            }}
          >
            {userInitials}
          </Avatar>
        </IconButton>
      </Tooltip>

      <Menu
  anchorEl={anchorEl}
  id="profile-menu"
  open={openMenu}
  onClose={handleMenuClose}
  transformOrigin={{ horizontal: "right", vertical: "top" }}
  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
  PaperProps={{
    elevation: 3,
    sx: {
      borderRadius: 12, // Rounded corners
      overflow: "hidden",
      padding: 3,
      minWidth: 320, // Slightly larger width
      backgroundColor: "#F0F8FF", // Light grey background
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)", // Subtle shadow
      transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out", // Smooth animation
    },
  }}
>
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    gap={1}
  >
    <Avatar
      sx={{
        bgcolor: "lightblue",
        width: 80,
        height: 80,
        marginBottom: 2,
        fontSize:30
      }}
    >
      {userInitials}
    </Avatar>
    <Typography variant="h6" fontWeight="600">
      {user?.firstName + " " + user?.lastName || "Guest"}
    </Typography>
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ fontSize: "0.9rem", wordBreak: "break-word", textAlign: "center" }}
    >
      {user?.email || ""}
    </Typography>
  </Box>
  <Divider sx={{ my: 2, borderColor: "#e0e0e0" }} />
  <Box
    display="flex"
    flexDirection="row"
    alignItems="center"
    justifyContent= "center"

    gap={2}
    sx={{ mt: 2 }}
  >
    <ButtonBase
      onClick={() => {
        userDispatch({ type: "LOGOUT" });
        setStage("login");
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        height: "55px",
         borderRadius: "12px 0 0 12px",
        backgroundColor: "#ffffff", // White button background
        color: "#333",
        fontWeight: "bold",
        textTransform: "none",
        fontSize: "0.95rem",
        "&:hover": {
          backgroundColor: "#f9f9f9", // Slightly darker white on hover
        },
      }}
    >
      <Logout sx={{ marginRight: 1, fontSize: "1.2rem" }} />
      Logout
    </ButtonBase>
    <ButtonBase
      onClick={() => {
        setStage("edit");
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "55px",
        width: "90%",
        borderRadius: "0 12px 12px 0",
        backgroundColor: "#ffffff", // White button background
        color: "#333",
        fontWeight: "bold",
        textTransform: "none",
        fontSize: "0.95rem",
        "&:hover": {
          backgroundColor: "#f9f9f9", // Slightly darker white on hover
        },
      }}
    >
      <Settings sx={{ marginRight: 1, fontSize: "1.2rem" }} />
      Edit Profile
    </ButtonBase>
  </Box>
</Menu>


    </Box>
  );
};

export default HomePage;
