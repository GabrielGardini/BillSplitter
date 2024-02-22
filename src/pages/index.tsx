/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  Box,
  Button,
  Grid,
  Input,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { use, useEffect, useState } from "react";
import { Person, SettingsBluetoothOutlined } from "@mui/icons-material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const matches = useMediaQuery("(min-width:600px)");
  const matches2 = useMediaQuery("(min-width:900px)");
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTipAmount((bill * tip) / people);
    setTotal(bill / people + (bill * tip) / people);
  }, [bill, tip, people]);

  const onReset = () => {
    setBill(0);
    setTip(0);
    setPeople(1);
    setTipAmount(0);
    setTotal(0);
  };

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/gabrielgardini/");
  };

  return (
    <Box className="container">
      <Head>
        <title>Bill Splitter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,700;1,400;1,700&display=swap');
        </style>
      </Head>
      <main>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Space mono, sans-serif",
              fontWeight: "bold",
              color: "hsl(183, 100%, 15%)",
              fontSize: "30px",
              marginY: 5,
            }}
          >
            Spli<br></br>tter
          </Typography>
          <Grid
            className="container"
            container
            sx={{
              bgcolor: "white",
              borderRadius: 5,
              width: matches ? "50%" : "70%",
              padding: 2,
            }}
          >
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Space mono, sans-serif",
                    fontWeight: "bold",
                    color: "hsl(184, 14%, 56%)",
                    fontSize: "16px",
                    marginY: 1,
                  }}
                >
                  Bill
                </Typography>
              </Box>

              <div style={{ width: "100%" }} className="input-container">
                <input
                  type="number"
                  placeholder="0"
                  onChange={(e) => setBill(Number(e.target.value))}
                />
                <span className="icon">
                  <AttachMoneyIcon sx={{ color: "hsl(184, 14%, 56%)" }} />
                </span>
              </div>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Space mono, sans-serif",
                    fontWeight: "bold",
                    color: "hsl(184, 14%, 56%)",
                    fontSize: "16px",
                    marginY: 1,
                  }}
                >
                  Select Tip %
                </Typography>
              </Box>
              {matches2 ? (
                <>
                  <Grid
                    container
                    gap={3}
                    sx={{
                      mt: 1,
                      display: "flex",
                    }}
                  >
                    <Grid className="grid" item md={3}>
                      <Button
                        className="priceButton"
                        onClick={() => setTip(0.05)}
                        variant="contained"
                      >
                        5%
                      </Button>
                    </Grid>
                    <Grid className="grid" item md={3}>
                      <Button
                        className="priceButton"
                        onClick={() => setTip(0.1)}
                        variant="contained"
                      >
                        10%
                      </Button>
                    </Grid>
                    <Grid className="grid" item md={3}>
                      <Button
                        className="priceButton"
                        onClick={() => setTip(0.15)}
                        variant="contained"
                      >
                        15%
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    gap={3}
                    sx={{
                      mt: 1,
                      mb: 1,
                      display: "flex",
                    }}
                  >
                    <Grid className="grid" item md={3}>
                      <Button
                        className="priceButton"
                        onClick={() => setTip(0.25)}
                        variant="contained"
                      >
                        25%
                      </Button>
                    </Grid>
                    <Grid className="grid" item md={3}>
                      <Button
                        className="priceButton"
                        onClick={() => setTip(0.5)}
                        variant="contained"
                      >
                        50%
                      </Button>
                    </Grid>
                    <Grid className="grid" item xs={3}>
                      <input
                        onChange={(e) => setTip(Number(e.target.value) / 100)}
                        className="tipInput"
                        type="number"
                        placeholder="Custom"
                      />
                    </Grid>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid
                    container
                    gap={2}
                    sx={{
                      mt: 1,
                      display: "flex",
                    }}
                  >
                    <Grid className="grid" item xs={5}>
                      <Button
                        className="priceButton"
                        onClick={() => setTip(0.05)}
                        variant="contained"
                      >
                        5%
                      </Button>
                    </Grid>
                    <Grid className="grid" item xs={5}>
                      <Button
                        className="priceButton"
                        onClick={() => setTip(0.1)}
                        variant="contained"
                      >
                        10%
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    gap={2}
                    sx={{
                      mt: 1,
                      display: "flex",
                    }}
                  >
                    <Grid className="grid" xs={5}>
                      <Button
                        className="priceButton"
                        onClick={() => setTip(0.15)}
                        variant="contained"
                      >
                        15%
                      </Button>
                    </Grid>
                    <Grid className="grid" xs={5}>
                      <Button
                        className="priceButton"
                        onClick={() => setTip(0.25)}
                        variant="contained"
                      >
                        25%
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid
                    gap={2}
                    container
                    sx={{
                      mt: 1,
                      mb: 1,
                    }}
                  >
                    <Grid className="grid" item xs={5}>
                      <Button
                        className="priceButton"
                        onClick={() => setTip(0.5)}
                        variant="contained"
                      >
                        50%
                      </Button>
                    </Grid>
                    <Grid className="grid" item xs={5}>
                      <input
                        onChange={(e) => setTip(Number(e.target.value) / 100)}
                        className="tipInput"
                        type="number"
                        placeholder="Custom"
                      />
                    </Grid>
                  </Grid>
                </>
              )}
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Space mono, sans-serif",
                    fontWeight: "bold",
                    color: "hsl(184, 14%, 56%)",
                    fontSize: "16px",
                    marginY: 1,
                  }}
                >
                  Number of people
                </Typography>
              </Box>

              <div style={{ width: "100%" }} className="input-container">
                <input
                  type="number"
                  placeholder="1"
                  onChange={(e) => setPeople(Number(e.target.value))}
                />
                <span className="icon">
                  <Person sx={{ color: "hsl(184, 14%, 56%)" }} />
                </span>
              </div>
            </Grid>
            <Grid
              sx={{
                bgcolor: "hsl(183, 100%, 15%)",
                borderRadius: 5,
                padding: 2,
                mt: matches ? 0 : 1,
              }}
              item
              md={6}
              xs={12}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Space mono, sans-serif",
                      fontWeight: "bold",
                      color: "hsl(0, 0%, 100%)",
                      fontSize: "12px",
                      marginY: 1,
                    }}
                  >
                    Tip Amount<br></br>{" "}
                    <span style={{ color: "hsl(184, 14%, 56%)" }}>
                      / person
                    </span>
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Space mono, sans-serif",
                      fontWeight: "bold",
                      color: "hsl(172, 67%, 45%)",
                      fontSize: "30px",
                      marginY: 1,
                    }}
                  >
                    ${tipAmount.toFixed(2)}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Space mono, sans-serif",
                      fontWeight: "bold",
                      color: "hsl(0, 0%, 100%)",
                      fontSize: "12px",
                      marginY: 1,
                    }}
                  >
                    Total<br></br>{" "}
                    <span style={{ color: "hsl(184, 14%, 56%)" }}>
                      / person
                    </span>
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Space mono, sans-serif",
                      fontWeight: "bold",
                      color: "hsl(172, 67%, 45%)",
                      fontSize: "30px",
                      marginY: 1,
                    }}
                  >
                    ${total.toFixed(2)}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  height: matches2 ? "60%" : "",
                  display: matches2 ? "flex" : "",
                  alignItems: matches2 ? "end" : "",
                }}
              >
                <Button
                  onClick={() => {
                    onReset();
                  }}
                  className="resetButton"
                >
                  Reset
                </Button>
              </Box>
            </Grid>
          </Grid>
          <button
            style={{
              width: matches ? "50%" : "70%",
              marginTop: 2,
            }}
            className="aboutButton"
            onClick={() => {
              openLinkedin();
            }}
          >
            About me
          </button>
        </Box>
      </main>
    </Box>
  );
}
