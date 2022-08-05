import React from "react";

type Props = {};

export default function Slides({}: Props) {
   return (
      <div className="h-full bg-gray-200 flex">
         <div className="h-full bg-red-500 w-2/12 rounded-tr-3xl overflow-hidden">
            <div className="text-center text-xl border-b-2 border-black relative hover:bg-red-400">
               <span>Section 1</span>
               <span className="absolute right-5"> V</span>
            </div>
            <div className="text-center text-xl border-b-2 border-black relative hover:bg-red-400">
               <span>Section 2</span>
               <span className="absolute right-5"> V</span>
            </div>
         </div>
         <div className="h-full w-8/12 grid place-content-center">
            <div className="border-2 border-black rounded-lg p-5  w-40">
               <div>Section 6</div>
               <div className="pl-2">Shelf A</div>
               <div className="pl-4 flex">
                  <span>-A1</span>
                  <span className="h-5 w-5 rounded-full bg-green-400 grid place-content-center">
                     i
                  </span>
               </div>
               <div className="pl-4">-A2</div>
               <div className="pl-4">-A3</div>
               <div className="pl-4">-A4</div>
               <div className="pl-4">-A5</div>
               <div className="pl-2">Shelf B</div>
               <div className="pl-4">-B1</div>
               <div className="pl-4">-B2</div>
               <div className="pl-4">-B3</div>
               <div className="pl-4">-B4</div>
               <div className="pl-4">-B5</div>
            </div>
         </div>
         <div className="h-full bg-red-500 w-2/12 rounded-tl-3xl"></div>
      </div>
   );
}
