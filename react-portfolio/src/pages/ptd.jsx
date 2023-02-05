import Head from "next/head";
import * as React from "react";
import {Inter} from "@next/font/google";
import Link from "next/link";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
    TreeView,
    TreeItem,
} from "@mui/lab";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {MdOutlineCatchingPokemon} from "react-icons/md";
import Image from "next/image";
import design from "../../public/pokemon-wpf/pokemonStats.gif";
import diceRoll from "../../public/dnd/dndDiceRoll.gif";
import dnd from "../../public/dnd/dnd.png";
import Navbar from "@/components/navbar";
import styles from "../styles/Home.module.css";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import {styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({theme}) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: "black",
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));


export default function Ptd() {

    const [option, setOption] = React.useState("");

    const handleChange = (event) => {
        setOption(event.target.value);
    };

    return (
        <>
            <Head>
                <title>Pokemon Tower Defense Game</title>
                <meta name='description' content='Generated by create next app'/>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <main className='px-10'>
                <section className='min-h-screen my-auto'>
                    <Navbar/>
                    <div className='text-center py-5'>
                        <h1 className='text-red-500 text-3xl font-code font-bold'>
                            Pokemon Tower Defense Game
                        </h1>
                        <Image src={dnd} className='rounded-md px-2 pt-5'/>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-4xl font-bold py-5'>Game Features:</h2>
                        <FormControl sx={{m: 1, minWidth: 240}}>
                            <InputLabel id='demo-simple-select-label'
                                        className="text-red-400 text-2xl mt-4 ml-3">Features <ChevronRightIcon /></InputLabel>
                            <Select
                                className="text-white text-4xl font-bold"
                                labelId='demo-simple-select-label'
                                id='demo-simple-select'
                                value={option}
                                label='Mechanic'
                                onChange={handleChange}
                                input={<BootstrapInput/>}
                            >
                                <MenuItem className="text-2xl" value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem className="text-2xl" value={0}>Levels</MenuItem>
                                <MenuItem className="text-2xl" value={1}>Pokemon</MenuItem>
                                <MenuItem className="text-2xl" value={2}>Saving Progress</MenuItem>
                                <MenuItem className="text-2xl" value={3}>Battle Mechanics</MenuItem>
                            </Select
>
                        </FormControl>
                    </div>
                </section>

                <section>

                  {option == 1 &&
                    <div className='text-center'>
                        <div className='text-center shadow-xl shadow-teal-800 p-10 rounded-xl my-10'>
                            <Image className='mx-auto' src={diceRoll}/>
              <h3 className='text-lg font-medium pt-4'>Why?</h3>
              <p className='pt-4 pb-2'>
                Had to create and application of persistent storage of data and
                what better than Pokemon?
              </p>
              <h4>Tools I Used:</h4>
              <p className='text-gray-200 py-1'>WPF</p>
              <p className='text-gray-200 py-1'>C#</p>
              <p className='text-gray-200 py-1'>.CSV files</p>
              <p className='text-gray-200 py-1'>XAML</p>
              <p className='text-gray-200 py-1'>.NET Framework</p>
              <p className='text-gray-200 py-1'>Object-Oriented Programing</p>
                        </div>
                    </div>}
                </section>
            </main>
        </>
    );
}
