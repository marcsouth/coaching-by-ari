import React from "react";
import { CgGym } from "react-icons/cg";
import { HiUserGroup } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import { GiMeal } from "react-icons/gi";

export default function Services() {
  return (
    <>
      <div className=" px-4 mx-auto flex ">
        <div className="text-center mx-auto w-full ">
          <div className="flex w-full gap-8 flex-wrap max-w-600 mx-auto justify-center items-center max-w-6xl">
            <div className=" shadow-white shadow-inner bg-gradient-to-r from-white to-gray-700 rounded-xl p-0.5 max-w-md h-full ">
              <div className=" p-4  bg-black w-full rounded-xl max-w-sm">
                <h2 className="text-large font-semibold  text-white  mb-2 ">
                  One-on-one training sessions
                </h2>
                <p className=" text-gray-400  ">
                  work with clients one-on-one to develop personalized fitness
                  plans and provide guidance, support, and motivation.
                </p>

                <div className=" flex items-center justify-center mt-4">
                  <CgGym size={40} color="#9C27B0" />
                </div>
              </div>
            </div>

            <div className=" shadow-white shadow-inner bg-gradient-to-r from-white to-gray-700 rounded-xl p-0.5 max-w-md h-full ">
              <div className=" p-4  bg-black w-full rounded-xl max-w-sm">
                <h2 className="text-lg font-semibold  text-white  mb-2">
                  Group training sessions
                </h2>
                <p className=" text-gray-400 ">
                  group training sessions for clients who prefer to exercise in
                  a social setting or want to split the cost of personal
                  training with others.
                </p>

                <div className=" flex items-center justify-center mt-4">
                  <HiUserGroup size={40} color="#9C27B0" />
                </div>
              </div>
            </div>

            <div className=" shadow-slate-100 shadow-inner bg-gradient-to-r from-white to-gray-700 rounded-xl p-0.5 max-w-md h-full ">
              <div className=" p-4  bg-black w-full rounded-xl h-full max-w-sm">
                <h2 className="text-lg font-semibold  mb-2 ">
                  Virtual training sessions
                </h2>
                <p className="text-gray-400 ">
                  virtual training sessions for clients who work out from home
                  or in a different location. Individual and group packages
                  available.
                </p>

                <div className=" flex items-center justify-center mt-4">
                  <MdComputer size={40} color="#9C27B0" />
                </div>
              </div>
            </div>

            <div className=" shadow-white shadow-inner bg-gradient-to-r from-white to-gray-700 rounded-xl p-0.5 max-w-md h-full  ">
              <div className=" p-4  bg-black w-full rounded-xl max-w-sm">
                <h2 className="text-lg font-semibold  mb-2">
                  Nutritional guidance Plans
                </h2>
                <p className=" text-gray-400 ">
                  nutritional guidance to clients to help them develop healthy
                  eating habits and optimize their fitness results.
                </p>

                <div className=" flex items-center justify-center mt-4">
                  <GiMeal size={40} color="#9C27B0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
