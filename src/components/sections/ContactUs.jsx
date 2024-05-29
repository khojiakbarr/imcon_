/* eslint-disable jsx-a11y/iframe-has-title */
import { FormControl, InputLabel, TextField } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import { useForm } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

export default function ContactUs() {
  const CHAT_ID = "-4118474276";
  const Token = "7304466654:AAE62YY9OMijvnkpWMpJjgDZC7I4SZnmLfE";
  let URL_API = `https://api.telegram.org/bot${Token}/sendMessage`;

  const { register, handleSubmit, reset } = useForm();

  const sentMassageFn = async (data) => {
    console.log(data);
    let message = `<b>Contact </b> \n`;
    message += `<b>Name: </b>${data.name}\n`;
    message += `<b>Phone: </b>${data.phone}\n`;
    message += `<b>Service: </b>${data.service}\n`;
    reset();

    try {
      await axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const [setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div id="contactSec" className="container">
      <h2 className="text-[64px] font-extrabold text-[#3461FF] mb-[80px] lg:mb-[40px] lg:text-[48px] md:text-[38px] sm:text-[28px] sm:mb-[10px]">
        Contact us
      </h2>

      <div className="w-full shadow-[2px_10px_28px_rgba(75,_0,_129,_0.12)] p-[40px_98px_88px] lg:px-[49px] lg:pb-[44px] md:p-[10px]">
        <h3 className="text-[20px] leading-[30px] font-[700] mb-[20px] sm:text-[18px]">
          Leave us a message
        </h3>

        <div className="flex justify-between md:flex-col md:gap-5">
          <form
            onSubmit={handleSubmit((data) => sentMassageFn(data))}
            className="flex flex-col items-start gap-[24px] w-[45%] md:w-[100%]"
          >
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              required
              sx={{ width: "100%" }}
              name="Name"
              {...register("name")}
            />
            <TextField
              id="outlined-basic"
              label="Phone number"
              variant="outlined"
              type="tel"
              required
              sx={{ width: "100%" }}
              name="Phone"
              {...register("phone")}
            />

            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Service
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                onChange={handleChange}
                autoWidth
                label="Service"
                defaultValue="Web development"
                {...register("service")}
              >
                <MenuItem value={"Web development"} selected>
                  Web development
                </MenuItem>
                <MenuItem value={"UX&UI"}>UX&UI</MenuItem>
                <MenuItem value={"CRM systems"}>CRM systems</MenuItem>
                <MenuItem value={"Branding"}>Branding</MenuItem>
                <MenuItem value={"Video editing"}>Video editing</MenuItem>
              </Select>
            </FormControl>

            <button
              id="formBtn"
              className="w-[50%] p-[10px_16px] bg-[#3461FF] text-[#fff] font-medium text-[16px] whitespace-nowrap leading-[20px] rounded-[8px] md:p-[12px_20px] sm:w-full"
            >
              Send
            </button>
          </form>

          <div className="w-[45%] flex flex-col gap-[24px] md:w-full">
            <ul className="flex flex-col gap-[24px]">
              <li>
                <a href="/">
                  <LocationOnIcon
                    sx={{
                      color: "#3461FF",
                      marginRight: "8px",
                      fontSize: "24px",
                    }}
                  />
                  <span className="text-[16px] leading-[22px] font-normal">
                    Ташкент, Мирзо-Улугбекский район, махалля Шахриобод
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+998000000000" className="">
                  <PhoneIcon
                    sx={{
                      color: "#3461FF",
                      marginRight: "8px",
                      fontSize: "24px",
                    }}
                  />
                  <span className="text-[16px] leading-[22px] font-normal">
                    +998 99 000 00 00
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:" className="">
                  <MailOutlineIcon
                    sx={{
                      color: "#3461FF",
                      marginRight: "8px",
                      fontSize: "24px",
                    }}
                  />
                  <span className="text-[16px] leading-[22px] font-normal">
                    Imcon@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a href="https://t.me/" className="">
                  <TelegramIcon
                    sx={{
                      color: "#3461FF",
                      marginRight: "8px",
                      fontSize: "24px",
                    }}
                  />
                  <span className="text-[16px] leading-[22px] font-bold text-[#3461FF]">
                    t.me/Imcon_company
                  </span>
                </a>
              </li>
            </ul>

            <ul className="flex items-center gap-[16px]">
              <li>
                <a href="/">
                  <YouTubeIcon
                    sx={{
                      color: "#3461FF",
                      fontSize: "24px",
                      transition: "color 0.3s ease",
                      ":hover": { color: "#ff0000" },
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <InstagramIcon
                    sx={{
                      color: "#3461FF",
                      fontSize: "24px",
                      transition: "color 0.3s ease",
                      ":hover": { color: "#ff0000" },
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <FacebookIcon
                    sx={{
                      color: "#3461FF",
                      fontSize: "24px",
                      transition: "color 0.3s ease",
                      ":hover": { color: "#1b5bf7" },
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <TwitterIcon
                    sx={{
                      color: "#3461FF",
                      fontSize: "24px",
                      transition: "color 0.3s ease",
                      ":hover": { color: "#1b5bf7" },
                    }}
                  />
                </a>
              </li>
            </ul>

            <div className="w-[400px] h-[200px] lg:w-full md:h-[300px] sm:h-[200px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95901.41990287448!2d69.2518912!3d41.3106176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1716037236791!5m2!1sru!2s"
                width="100%"
                height="100%"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
