import * as React from "react";
import Alert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

 
function snackbar({setOpen,open,severity,message}) {
    const vertical="bottom";
    const horizontal="center";
    const handleClose = () => {
        setOpen(false);
      };
  return (
    <div>
      <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical, horizontal }}
              >
                <Alert
                  onClose={handleClose}
                  severity={severity}
                  sx={{ width: "100%" }}
                >
                  {message}
                </Alert>
        </Snackbar>  
    </div>
  )
}

export default snackbar