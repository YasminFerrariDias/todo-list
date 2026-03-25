import React from "react";
import Icon from "./icon";
import Text from "./text";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(`
  flex items-center cursor-pointer 
  transition rounded-lg group gap-2
`, {
  variants: {
    variant: {
      primary: "bg-gray-200 hover:bg-pink-light"
    },
    size: {
      md: "h-14 py-4 px-5"
    },
    disable: {
      true: "opacity-50 pointer-events-none"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disable: false
  }
});

export const buttonTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-gray-400"
    }
  }
})

export const buttonIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-pink-base"
    },
    size: {
      md: "w-5 h-5"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
})

interface ButtonProps
  extends React.ComponentProps<"button">,
  VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"]
}

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  icon: IconComponent,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, size, disable: disabled, className })}
      {...props}>
      {IconComponent && (
        <Icon
          svg={IconComponent}
          className={buttonIconVariants({ variant, size })}
        />
      )}
      <Text variant="body-md-bold" className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  )
}
