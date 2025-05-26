import React, { JSX } from "react";

// Define a type that allows any HTML tag or component
type CustomComponentProps<T extends React.ElementType> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

// Memoized cache for performance
const componentCache = new Map();

const C = new Proxy(
  {},
  {
    get: (_, tagName: string) => {
      if (!componentCache.has(tagName)) {
        componentCache.set(
          tagName,
          <T extends React.ElementType = "div">({
            as,
            ...props
          }: CustomComponentProps<T>) => {
            const Element = (as || "div") as React.ElementType;
            return React.createElement(Element, props);
          }
        );
      }
      return componentCache.get(tagName);
    },
  }
) as Record<
  string,
  <T extends React.ElementType = "div">(
    props: CustomComponentProps<T>
  ) => JSX.Element
>;

export default C;
