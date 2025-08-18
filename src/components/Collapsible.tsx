import * as CollapsibleRadix from '@radix-ui/react-collapsible'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Collapsible = CollapsibleRadix.Root
const CollapsibleTrigger = CollapsibleRadix.Trigger

const CollapsibleContent = forwardRef<
  React.ComponentRef<typeof CollapsibleRadix.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsibleRadix.Content>
>(({ className, ...props }, ref) => {
  return (
    <CollapsibleRadix.Content
      className={twMerge(
        `overflow-hidden data-[state=open]:animate-slideDownCollapsible data-[state=closed]:animate-slideUpCollapsible`,
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

CollapsibleContent.displayName = CollapsibleRadix.Content.displayName

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
