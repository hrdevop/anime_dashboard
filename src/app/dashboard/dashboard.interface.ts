export interface IData {
  pagination: {
    last_visible_page: string,
    has_next_page: boolean,
    current_page: number,
    items: {
      count: number,
      total: number,
      per_page: number
    }
  },
  data: IAnime[]
}
export interface IAnime {
  mal_id: number,
  url: string,
  images: {
    jpg: {
      image_url: string
    },
    webp: {
      image_url: string,
      small_image_url: string
    }
  },
  name: string,
  name_kanji: string,
  nicknames: string[],
  favorites: number,
  about: string
}

export interface IPagination {
  currentPage: number,
  limit: number,
  searchValue: string
}
