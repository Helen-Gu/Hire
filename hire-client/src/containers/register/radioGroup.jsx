import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioButtonsGroup(props) {
  const [value, setValue] = React.useState("applicant");

  const handleChange = (event) => {
    setValue(event.target.value);
    props.onChange(event.target.value);
  };
  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">User Type</FormLabel> */}
      <RadioGroup
        aria-label="userType"
        name="userType1"
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value="applicant"
          control={<Radio />}
          label="Applicant"
        />
        <FormControlLabel
          value="recruiter"
          control={<Radio />}
          label="Recruiter"
        />
        {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
      </RadioGroup>
    </FormControl>
  );
}
