import Link from 'next/link'
import type { ReactElement, ReactNode } from 'react'
import type { BlogFrontMatter } from '../types'
import { GoBack } from './go-back'

export function Meta({
  author,
  tags,
  date,
  readingTime,
  children
}: BlogFrontMatter & { children?: ReactNode }): ReactElement {
  const tagsEl = tags?.map(t => (
    <Link key={t} href={`/tags/${t}`} className="nextra-tag">
      {t}
    </Link>
  ))

  const readingTimeText = readingTime?.text

  return (
    <div
      className={
        '_mb-8 _flex _gap-3 ' +
        (readingTimeText ? '_items-start' : '_items-center')
      }
    >
      <div className="_grow dark:_text-gray-400 _text-gray-600">
        <div className="_not-prose _flex _flex-wrap _items-center _gap-1">
          {author}
          {author && date && ','}

          {children}

          {(author || date) && (readingTime || tags?.length) && (
            <span className="_px-1">•</span>
          )}
          {readingTimeText || tagsEl}
        </div>
        {readingTime && (
          <div className="_not-prose _mt-1 _flex _flex-wrap _items-center _gap-1">
            {tagsEl}
          </div>
        )}
      </div>
      <GoBack />
    </div>
  )
}
