import {
  FormControl,
  TextField,
  Paper,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const FormElement = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <Box sx={{ width: "600px", margin: "auto" }} p={4} component={Paper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} direction={"column"}>
          <Grid item>
            <FormControl fullWidth={true}>
              <TextField
                label="Email ID"
                variant="outlined"
                {...register("example")}
              />
              {errors.example && <span>This field is required</span>}
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl fullWidth={true}>
              <TextField
                label="Password"
                variant="outlined"
                {...register("exampleRequired", { required: true })}
                type="password"
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </FormControl>
          </Grid>
          <Grid item>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default FormElement;
