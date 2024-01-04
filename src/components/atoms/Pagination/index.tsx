import { ReactNode } from 'react';
import { compressPagination } from './util';
import clsx from 'clsx';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export type PaginationProps = {
  current: number;
  total: number;
  centerMargin?: number;
  sidePadding?: number;
  buttonFactory: ({
    pageNumber,
    children,
  }: {
    pageNumber: number;
    children: ReactNode;
  }) => ReactNode;
};

const PrevNext = ({
  type,
  disabled,
}: {
  type: 'prev' | 'next';
  disabled?: boolean;
}) => (
  <div
    className="flex items-center gap-1 text-primary text-sm font-medium aria-disabled:font-normal aria-disabled:text-outline-variant"
    aria-disabled={disabled}
  >
    {type === 'prev' && <BsChevronLeft />}
    {type === 'prev' ? '前へ' : '次へ'}
    {type === 'next' && <BsChevronRight />}
  </div>
);

type PageElementProps =
  | {
      type: 'number';
      pageNumber: number;
      active?: boolean;
    }
  | {
      type: 'spacer';
    };

const PageElement = (props: PageElementProps) => {
  if (props.type === 'spacer') {
    return (
      <div className="font-alphanumeric text-outline px-2.5 py-1.5 leading-5">
        ...
      </div>
    );
  }

  return (
    <div
      className={clsx(
        props.active
          ? 'bg-primary text-on-primary'
          : 'bg-transparent text-on-surface hover:border-outline-variant',
        'rounded-md px-2.5 py-1.5 leading-5',
        'border border-transparent',
        'font-alphanumeric text-sm'
      )}
    >
      {props.pageNumber}
    </div>
  );
};

export const Pagination = ({
  current,
  total,
  centerMargin = 2,
  sidePadding = 1,
  buttonFactory,
}: PaginationProps) => {
  const compressedPageNumbers = compressPagination({
    current,
    total,
    centerMargin,
    sidePadding,
  });
  const pageElements = compressedPageNumbers
    .map((group) =>
      group
        .map<PageElementProps>((num) => ({
          type: 'number',
          pageNumber: num,
          active: num === current,
        }))
        .concat({ type: 'spacer' })
    )
    .flat()
    .slice(0, -1);

  return (
    <nav className="flex justify-center items-center gap-4">
      {current === 1 ? (
        <PrevNext type="prev" disabled />
      ) : (
        buttonFactory({
          pageNumber: current - 1,
          children: <PrevNext type="prev" />,
        })
      )}
      <ul className="flex gap-1 justify-center">
        {pageElements.map((pageElement, i) => (
          <li
            key={i}
            className={
              pageElement.type === 'number' && !pageElement.active
                ? 'hidden first:block last:block lg:block'
                : undefined
            }
          >
            {pageElement.type === 'number' && !pageElement.active ? (
              buttonFactory({
                pageNumber: pageElement.pageNumber,
                children: <PageElement {...pageElement} />,
              })
            ) : (
              <PageElement {...pageElement} />
            )}
          </li>
        ))}
      </ul>
      {current === total ? (
        <PrevNext type="next" disabled />
      ) : (
        buttonFactory({
          pageNumber: current + 1,
          children: <PrevNext type="next" />,
        })
      )}
    </nav>
  );
};
