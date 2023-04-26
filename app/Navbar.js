"use client";
import React, { useState } from "react";

const courseData = {
    "1. Introduction": {

        "1.1. Prerequisites": {
            id: "prerequisites",
            name: "Prerequisites",
            content: "Basic knowledge of programming and computer architecture."
        },
        "1.2. The goals of this course": {
            id: "goals",
            name: "The Goals of This Course",
            content: "To provide students with the knowledge and skills to perform fuzzing on hypervisors and UEFI applications."
        },
        "1.3. Motivation": {
            id: "motivation",
            name: "Motivation",
            content: "Hypervisors are widely used in cloud computing, and the security of hypervisors is critical for cloud security."
        },
        // ...
    },
    "2. Hypervisor setup and operation-cycle": {

        "2.1. Installing a hypervisor": {
            id: "installing-hypervisor",
            name: "Installing a Hypervisor",
            content: "This section covers the installation process for a hypervisor, including requirements, configuration, and troubleshooting."
        },
        "2.2. Hypervisor operation cycle": {
            id: "hypervisor-operation-cycle",
            name: "Hypervisor Operation Cycle",
            content: "This section describes the operation cycle of a hypervisor, including bootstrapping, initialization, virtual machine creation, and guest execution."
        },
        "2.3. Hypervisor management tools": {
            id: "hypervisor-management-tools",
            name: "Hypervisor Management Tools",
            content: "This section covers the tools used for managing hypervisors, including command-line interfaces, graphical user interfaces, and APIs."
        },
        // ...
    },
    "3. Memory virtualization": {

        "3.1. Memory management in hypervisors": {
            id: "memory-management",
            name: "Memory Management in Hypervisors",
            content: "This section describes how hypervisors manage memory, including techniques such as shadow page tables, memory ballooning, and memory overcommitment."
        },
        "3.2. Memory virtualization in action": {
            id: "memory-virtualization-action",
            name: "Memory Virtualization in Action",
            content: "This section demonstrates how memory virtualization works in practice, including how virtual machines access memory, how hypervisors protect memory, and how memory is shared among virtual machines."
        },
        "3.3. Memory introspection for fuzzing": {
            id: "memory-introspection",
            name: "Memory Introspection for Fuzzing",
            content: "This section explains how memory introspection can be used for fuzzing, including how to monitor guest memory, detect vulnerabilities, and generate test cases."
        },
        // ...
    },
    // ...
};

function Navbar() {

    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    const handleMenuItemClick = (id) => {
        setSelectedMenuItem(prevState => prevState === id ? null : id);
    };

    return (
        <div className="w-[30%] text-left h-screen bg-nav-bg">
        {/* Navbar */}
        <div className="flex flex-col">
          {Object.keys(courseData).map((menuItem) => (
            <div key={menuItem} className="mb-2">
              <button
                onClick={() => handleMenuItemClick(menuItem)}
                className={`${
                  selectedMenuItem === menuItem
                    ? "text-black font-semi-bold text-[1.5rem] bg-nav-active"
                    : "text-black font-semi-bold text-[1.5rem] bg-nav-inactive"
                } px-2 py-4 w-full text-start`}
              >
                {menuItem}
              </button>
              {selectedMenuItem === menuItem && (
                <div className="p-4 ml-3  rounded-lg">
                  {Object.keys(courseData[selectedMenuItem]).map(
                    (subMenuItem) => (
                      <div key={subMenuItem} className="mb-4">
                        <h3 className="text-lg font-medium mb-2">
                          {subMenuItem}
                        </h3>
                        <p className="text-gray-700">
                          {courseData[selectedMenuItem][subMenuItem].content}
                        </p>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
}


export default Navbar
