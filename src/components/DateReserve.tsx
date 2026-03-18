"use client"
import { useState } from "react"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem } from "@mui/material"

export default function LocationDateReserve({ showLocation = true }: { showLocation?: boolean }) {
    const [location, setLocation] = useState("")
    return (
        <div className="bg-slate-100 rounded-lg gap-x-5 gap-y-2 
        w-fit px-10 py-5 flex flex-row justify-center">

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"/>
            </LocalizationProvider>

            { showLocation && (
                <Select variant="standard" name="location" id="location" className="h-[2em] w-50"
                value={location}
                onChange={(e) => setLocation(e.target.value)}>
                    <MenuItem value="BKK">Bangkok</MenuItem>
                    <MenuItem value="CNX">Chiang Mai</MenuItem>
                    <MenuItem value="HKT">Phuket</MenuItem>
                </Select>
            )}
            
        </div>
    )
}