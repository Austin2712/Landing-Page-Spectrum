"use client";

import { Feature } from "./Feature";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>
          Everything you need
        </h2>
        <div className='mex-w-xl mx-auto'>
          <p className='text-center mt-5 text-xl text-white/70'>
            Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
          </p>
        </div>
        <div className="gap-4 mt-16 flex flex-row justify-center sm:mt-24 sm:flex-row sm:gap-10 flex-wrap">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-800 relative group/card hover:shadow-2xl hover:shadow-purple-500/50 border-purple-500 border-2 shadow-lg shadow-purple-500/30 w-auto sm:w-[30rem] h-auto rounded-xl p-6 transition-all duration-300">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-gray-300 text-sm max-w-sm mt-2"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="a"
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-purple-300"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-800 relative group/card hover:shadow-2xl hover:shadow-purple-500/50 border-purple-500 border-2 shadow-lg shadow-purple-500/30 w-auto sm:w-[30rem] h-auto rounded-xl p-6 transition-all duration-300">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-gray-300 text-sm max-w-sm mt-2"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="a"
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-purple-300"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        </div>
      </div>
    </div>
  )
};
