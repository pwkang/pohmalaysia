import * as Dialog from '@radix-ui/react-dialog';
import cn from 'classnames';
import { AnimatePresence, type MotionProps, motion } from 'framer-motion';
import { type ReactNode, useMemo } from 'react';
import type { DivPropsWithoutRef } from 'react-html-props';

type Placement = 'top' | 'right' | 'bottom' | 'left';

interface DrawerProps {
  placement?: Placement;
  open?: boolean;
  onClose?: () => void;
  width?: string | number;
  height?: string | number;
  children?: ReactNode;
}

type PlacementFn = ({
  width,
  height,
}: {
  width?: string | number;
  height?: string | number;
}) => MotionProps & DivPropsWithoutRef;

const commonClassname = 'fixed z-50 bg-white drop-shadow-lg max-h-screen max-w-full';

const PLACEMENTS_MAP: Record<Placement, PlacementFn> = {
  top: ({ height }) => ({
    initial: { y: '-100%' },
    animate: { y: 0 },
    exit: { y: '-100%' },
    transition: { duration: 0.3 },
    className: cn('top-0 left-0 w-full', commonClassname),
    style: {
      height,
    },
  }),
  right: ({ width }) => ({
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '100%' },
    transition: { duration: 0.3 },
    className: cn('h-screen top-0 right-0', commonClassname),
    style: {
      width,
    },
  }),
  bottom: ({ height }) => ({
    initial: { y: '100%' },
    animate: { y: 0 },
    exit: { y: '100%' },
    transition: { duration: 0.3 },
    className: cn('bottom-0 left-0 w-full', commonClassname),
    style: {
      height,
    },
  }),
  left: ({ width }) => ({
    initial: { x: '-100%' },
    animate: { x: 0 },
    exit: { x: '-100%' },
    transition: { duration: 0.3 },
    className: cn('h-screen top-0 left-0', commonClassname),
    style: {
      width,
    },
  }),
} as const;

const Drawer = (props: DrawerProps) => {
  const { onClose, open, placement = 'right', width = 256, height = 400, children } = props;

  const motionProps: MotionProps & DivPropsWithoutRef = useMemo(() => {
    return PLACEMENTS_MAP[placement]({ width, height });
  }, [placement, width, height]);

  return (
    <AnimatePresence>
      {open && (
        <Dialog.Root open={true} onOpenChange={onClose} modal>
          <Dialog.Portal>
            <Dialog.Overlay>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/50"
              />
            </Dialog.Overlay>
            <Dialog.Content>
              <motion.div {...motionProps}>{children}</motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </AnimatePresence>
  );
};

Drawer.displayName = 'Drawer';

export default Drawer;
