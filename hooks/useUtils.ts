export function useUtils() {
  /**
   * HTMLエスケープ関数
   * @param str
   * @returns エスケープされた文字列
   */
  const escapeHTML = (str: string): string => {
    return str.replace(/[&<>"'/]/g, (match) => {
      const escapeMap: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
      }
      return escapeMap[match]
    })
  }

  return {
    escapeHTML,
  }
}
