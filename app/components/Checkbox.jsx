import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import Link from "next/link";

export default function ControlledCheckbox() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <div className="flex items-center">
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "Must be 18 or above" }}
          sx={{
            color: pink[800],
            "&.Mui-checked": {
              color: pink[600],
            },
          }}
        />
        <p>Must be 18 years or above?</p>
      </div>

      <div className="flex justify-center mt-4">
        <Link href={checked ? "/dashboard" : "#"}>
          <button
            disabled={!checked}
            className="
              bg-pink-800 
              p-2 
              rounded-xl 
              hover:bg-pink-900 
              cursor-pointer 
              disabled:opacity-50 
              disabled:cursor-not-allowed
              transition
            "
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}
