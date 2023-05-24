"use client";
import Image from "next/image";
import Link from "next/link";
import gameHub from "../../../public/game-hub/game-hub.png";
import { Box } from "@mui/material";
import { Text } from "@nextui-org/react";
import Technologies from "@/components/technologies";

export default function GameHub(){
    const data = require('../../../public/game-hub/data.json');
    return (
      <Box className="mx-5">
        <Box margin='auto' textAlign='center' marginY={2}>
          <Text size={24} color='white'>
            Click on Image to go to Website.
          </Text>
        </Box>
        <Link href='https://sanderson-game-hub.vercel.app/' target='_blank'>
          <Image src={gameHub} />
        </Link>

        <Technologies className='mx-auto' technologies={data.technologies} />
      </Box>
    );
}