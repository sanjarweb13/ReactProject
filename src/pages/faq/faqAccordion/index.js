import React from "react";
import 'react-accessible-accordion/dist/fancy-example.css';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export default function FAQAccordion() {
  return (
    <Accordion className="font-bold">
      <AccordionItem className="my-2">
        <AccordionItemHeading className="font-bold">
          <AccordionItemButton>
            How Do I Rach The Restourant?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
            repudiandae sequi. Cupiditate iste vel labore sequi molestias
            doloremque sed aut id odit possimus voluptate magni voluptatibus,
            qui maiores illum necessitatibus!
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className="my-2">
        <AccordionItemHeading>
          <AccordionItemButton>
          Is The Reservation Required?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
            repudiandae sequi. Cupiditate iste vel labore sequi molestias
            doloremque sed aut id odit possimus voluptate magni voluptatibus,
            qui maiores illum necessitatibus!
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className="my-2">
        <AccordionItemHeading>
          <AccordionItemButton>
          Can I Host An Event At The Restourant?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
            repudiandae sequi. Cupiditate iste vel labore sequi molestias
            doloremque sed aut id odit possimus voluptate magni voluptatibus,
            qui maiores illum necessitatibus!
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className="my-2">
        <AccordionItemHeading>
          <AccordionItemButton>
          Is Vallet Parking Available At The Restourant?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
            repudiandae sequi. Cupiditate iste vel labore sequi molestias
            doloremque sed aut id odit possimus voluptate magni voluptatibus,
            qui maiores illum necessitatibus!
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className="my-2">
        <AccordionItemHeading>
          <AccordionItemButton>
          When Are The Happy Hours Of Your Bar?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
            repudiandae sequi. Cupiditate iste vel labore sequi molestias
            doloremque sed aut id odit possimus voluptate magni voluptatibus,
            qui maiores illum necessitatibus!
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className="my-2">
        <AccordionItemHeading>
          <AccordionItemButton>
          Is Seafood Available At The Restaurant?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
            repudiandae sequi. Cupiditate iste vel labore sequi molestias
            doloremque sed aut id odit possimus voluptate magni voluptatibus,
            qui maiores illum necessitatibus!
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
