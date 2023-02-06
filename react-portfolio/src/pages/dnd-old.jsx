import Head from "next/head";
import { Inter } from "@next/font/google";
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
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { MdOutlineCatchingPokemon } from "react-icons/md";
import Image from "next/image";
import design from "../../public/pokemon-wpf/pokemonStats.gif";
import diceRoll from "../../public/dnd/dndDiceRoll.gif";
import dnd from "../../public/dnd/dnd.png";
import Navbar from "@/components/navbar";
import styles from "../styles/Home.module.css";
import { Typography } from "@mui/material";

export default function Dnd() {
  return (
          <>
          <Head>
            <title>DND Character Creation Web App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="px-10">
            <section className="min-h-screen my-auto">
              <Navbar />
              <div className="text-center py-5">
                <h1 className="text-red-500 text-3xl font-code font-bold">
                  DND Character Creation Web App
                </h1>
                <Image src={dnd} className="rounded-md px-2 pt-5" />
              </div>
              <div className="text-center">
                <h2 className="text-4xl font-bold py-5">Knowledge demonstrated:</h2>
                <TreeView
                  aria-label="file system navigator"
                  defaultCollapseIcon={<ExpandMoreIcon />}
                  defaultExpandIcon={<ChevronRightIcon />}
                  sx={{
                  height: "auto",
                    flexGrow: 2,
                    maxWidth: 400,
                    overflowY: "auto",
                  }}
                  >
                  <TreeItem className="py-4" nodeId="1" label={<Typography variant="h4" className="font-bold" >Front-
                    End</Typography>}>
                    <TreeItem className="py-4" nodeId="2" label={<Typography variant="h5" >Handlebars</Typography>} />
                    <TreeItem className="py-4" nodeId="3" label={<Typography variant="h5" >JavaScript</Typography>} />
                    <TreeItem className="py-4" nodeId="4" label={<Typography variant="h5" >Bootstrap</Typography>} />
                  </TreeItem>
                  <TreeItem className="py-4" nodeId="5" label={<Typography variant="h4" className="font-bold" >Back-End</Typography>}>
                    <TreeItem className="py-4" nodeId="10" label={<Typography variant="h5" >Node.JS</Typography>} />
                    <TreeItem nodeId="6" label={<Typography variant="h5" >Docker</Typography>}>
                      <TreeItem className="py-4" nodeId="8" label={<Typography variant="h6" >MySQL Database</Typography>} />
                    </TreeItem>
                  </TreeItem>
                </TreeView>
              </div>
            </section>

            <section>
              <div className="text-center">
                <div className="text-center shadow-xl shadow-teal-800 p-10 rounded-xl my-10">
                  <Image className="mx-auto" src={diceRoll} />
                  <h3 className="text-lg font-medium pt-4">Why?</h3>
                  <p className="pt-4 pb-2">
                    Had to create and application of persistent storage of data and
                    what better than Pokemon?
                  </p>
                  <h4>Tools I Used:</h4>
                  <p className="text-gray-200 py-1">WPF</p>
                  <p className="text-gray-200 py-1">C#</p>
                  <p className="text-gray-200 py-1">.CSV files</p>
                  <p className="text-gray-200 py-1">XAML</p>
                  <p className="text-gray-200 py-1">.NET Framework</p>
                  <p className="text-gray-200 py-1">Object-Oriented Programing</p>
                </div>
              </div>
            </section>
          </main>
          </>
          );
}
