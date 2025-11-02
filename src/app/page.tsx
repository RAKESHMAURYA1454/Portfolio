import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos; Rakesh Maurya </Heading>
      <Paragraph className="max-w-xl mt-4 font-semibold">
        Final Year Computer Science Student | Full Stack Developer (React | Tailwind | MongoDB)
      </Paragraph>
      <Paragraph className="mt-2">
        I’m a Full Stack Developer and final-year Computer Science student, with a strong interest in building user-friendly and efficient web applications. My primary tech stack includes React, Tailwind CSS, and MongoDB. This is backed by a solid academic foundation in Computer Networks, Operating Systems, and DBMS, which I use to build robust and scalable solutions.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products /> {/* baad me aapan change kr liye */}
      <TechStack />
    </Container>
  );
}
