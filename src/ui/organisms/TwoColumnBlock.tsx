import classNames from 'classnames';
import { useEffect, createRef, Children, type CSSProperties } from 'react';

interface TwoColumnSectionProps extends React.ComponentProps<'section'> {
  reversed?: boolean;
  py?: number;
}

const TwoColumnSection: React.FC<TwoColumnSectionProps> = (props) => {
  const { children, py = 56, reversed = false, ...rest } = props;
  const elementRef = createRef<HTMLElement>();

  Children.forEach(children, (child) => {
    handleChild(child)
  });
  
  function handleChild(child) {
    if(child.type !== TwoColumnSectionItem) {
      throw Error('Child of TwoColumnSection should be only a TwoColumnSectionItem component!');
    }
  }

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.style.setProperty('--py', py.toString() + 'px');
    }
  }, [py, elementRef]);

  return (
    <section
      className="col-container col-container__two"
      ref={elementRef}
      {...rest}
    >
      {Children.map(children, (c) => c)}
    </section>
  );
};

type TwoColumnSectionItemPlacement = 'start' | 'end' | 'center';

interface TwoColumnSectionItemProps extends React.ComponentProps<'div'> {
  alignY?: TwoColumnSectionItemPlacement;
  alignX?: TwoColumnSectionItemPlacement;
}

const TwoColumnSectionItem: React.FC<TwoColumnSectionItemProps> = (props) => {
  const {
    alignX = 'left',
    alignY = 'center',
    children,
    className,
    ...rest
  } = props;
  const cn = classNames('col-container-wrapper', className);

  const style: CSSProperties = {
    alignItems: alignY,
    justifyContent: alignX,
  };

  if ('style' in rest) {
    rest.style = undefined;
  }

  return (
    <div className={cn} style={style} {...rest}>
      {children}
    </div>
  );
};

export {
  TwoColumnSection,
  TwoColumnSectionItem,
  type TwoColumnSectionItemPlacement,
  type TwoColumnSectionProps,
};
