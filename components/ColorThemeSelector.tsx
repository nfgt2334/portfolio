'use client'

import { IoIosDesktop, IoIosMoon, IoMdSunny } from 'react-icons/io'
import { DropdownMenu } from 'radix-ui'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ColorThemeSelector = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, themes, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="rounded border p-2 dark:border-gray-500">
        <div className="size-6"></div>
      </div>
    )
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          aria-label="カラーテーマを選択する"
          className="rounded border p-2"
          type="button"
        >
          {resolvedTheme === 'light' ? (
            <IoMdSunny className="size-6" />
          ) : (
            <IoIosMoon className="size-6" />
          )}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          className="overflow-hidden rounded border shadow-sm bg-white"
          sideOffset={8}
        >
          <DropdownMenu.Group className="flex flex-col">
            {themes.map((item) => (
              <DropdownMenu.Item
                className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm text-black hover:bg-slate-50 hover:text-black"
                key={item}
                onClick={() => setTheme(item)}
              >
                {item === 'light' ? (
                  <IoMdSunny className="size-5" />
                ) : item === 'system' ? (
                  <IoIosDesktop className="size-5" />
                ) : (
                  <IoIosMoon className="size-5" />
                )}
                <span className="capitalize">{item}</span>
                {item === theme && <span className="sr-only">（選択中）</span>}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default ColorThemeSelector
