import { Avatar, Box, Divider, IconButton, Menu, Tooltip, Typography, ButtonBase } from "@mui/material";
import { StageContext, UserContext } from "./userReducer";
import { Logout, Settings } from "@mui/icons-material";
import { useState, useContext } from "react";

const Profile = () => {
  const { user, userDispatch } = useContext(UserContext);
  const { setStage } = useContext(StageContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const openMenu = Boolean(anchorEl);
  const userInitials = user ? user.firstName?.[0] : "";

  const handleMenuToggle = (event?: React.MouseEvent<HTMLElement>) => 
    setAnchorEl(event ? event.currentTarget : null);

  return (
    <Box sx={{ position: "absolute", top: 16, left: 16 }}>
      <Tooltip title={`Hello ${user?.firstName || "User"}`}>
        <IconButton onClick={handleMenuToggle} size="small" aria-controls={openMenu ? "profile-menu" : undefined} aria-haspopup="true">
          <Avatar sx={{ bgcolor: 'lightblue', width: 55, height: 55, fontSize: 23 }}>{userInitials}</Avatar>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="profile-menu"
        open={openMenu}
        onClose={handleMenuToggle}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        PaperProps={{
          elevation: 3,
          sx: { borderRadius: 12, overflow: "hidden", padding: 3, minWidth: 320, backgroundColor: "#F0F8FF", boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)" },
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
          <Avatar sx={{ bgcolor: "lightblue", width: 80, height: 80, marginBottom: 2, fontSize: 30 }}>{userInitials}</Avatar>
          <Typography variant="h6" fontWeight="600">{user?.firstName} {user?.lastName || "Guest"}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.9rem", wordBreak: "break-word", textAlign: "center" }}>{user?.email}</Typography>
        </Box>
        <Divider sx={{ my: 2, borderColor: "#e0e0e0" }} />
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" gap={2} sx={{ mt: 2 }}>
          <ButtonBase onClick={() => { userDispatch({ type: "LOGOUT" }); setStage("navigation"); }} sx={{ width: "90%", height: 55, borderRadius: "12px 0 0 12px", backgroundColor: "#ffffff", color: "#333", fontWeight: "bold", "&:hover": { backgroundColor: "#f9f9f9" } }}>
            <Logout sx={{ marginRight: 1, fontSize: "1.2rem" }} /> Logout
          </ButtonBase>
          <ButtonBase onClick={() => setStage("edit")} sx={{ width: "90%", height: 55, borderRadius: "0 12px 12px 0", backgroundColor: "#ffffff", color: "#333", fontWeight: "bold", "&:hover": { backgroundColor: "#f9f9f9" } }}>
            <Settings sx={{ marginRight: 1, fontSize: "1.2rem" }} /> Edit Profile
          </ButtonBase>
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
