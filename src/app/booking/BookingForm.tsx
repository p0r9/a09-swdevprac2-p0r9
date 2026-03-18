"use client"
import { useState } from "react"
import { TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material"
import LocationDateReserve from "@/components/DateReserve"

const darkFieldSx = {
  "& .MuiInputBase-input": { color: "#171717" },
  "& .MuiInput-underline:before": { borderBottomColor: "#171717" },
  "& .MuiInput-underline:hover:before": { borderBottomColor: "#171717" },
  "& .MuiInput-underline:after": { borderBottomColor: "#0284c7" },
  "& .MuiInputLabel-root": { color: "#555555" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#0284c7" },
}

const darkSelectSx = {
  color: "#171717",
  "&:before": { borderBottomColor: "#171717" },
  "&:hover:before": { borderBottomColor: "#171717" },
  "&:after": { borderBottomColor: "#0284c7" },
  "& .MuiSvgIcon-root": { color: "#171717" },
}

export default function BookingForm() {
  const [venue, setVenue] = useState("")

  return (
    <>
      <div className="text-xl font-medium text-gray-800">Book a Venue</div>
      <form className="w-fit flex flex-col space-y-4">
        <TextField
          variant="standard"
          name="Name-Lastname"
          label="Name-Lastname"
          sx={darkFieldSx}
        />
        <TextField
          variant="standard"
          name="Contact-Number"
          label="Contact-Number"
          sx={darkFieldSx}
        />
        <FormControl variant="standard">
          <InputLabel id="venue-label" sx={{ color: "#555555", "&.Mui-focused": { color: "#0284c7" } }}>
            Venue
          </InputLabel>
          <Select
            id="venue"
            labelId="venue-label"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            sx={darkSelectSx}
          >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>
        <div className="mt-4">
          <LocationDateReserve showLocation={false} />
        </div>
        <button
          type="submit"
          name="Book Venue"
          className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
        >
          Book Venue
        </button>
      </form>
    </>
  )
}