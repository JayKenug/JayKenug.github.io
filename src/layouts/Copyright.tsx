import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <div>
      <Box>
        <Typography variant="body2" color="textSecondary" align="center">
          {"© "}
          <span color="inherit">
            Your Air Conditioner
          </span>
          {" - "}
        </Typography>
      </Box>
      <Typography variant="body2" color="textSecondary" align="center">
        {" 2021 - " + " 2099 " }
      </Typography>
    </div>
  );
}

export default Copyright;
