import { Meta, StoryObj } from '@storybook/react'
import { ImageGallery } from '.'

const meta: Meta<typeof ImageGallery> = {
  component: ImageGallery,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    images: [
      'https://cdn-ak.f.st-hatena.com/images/fotolife/M/MouseComputer/20240731/20240731110005.jpg',
      'https://www.hitachi-solutions-create.co.jp/column/img/image-generation-ai.jpg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIfGE1HXtscenlYX3ElAV00frQd1RYYOuyobi-zrMOnPmpKis8XapJ2FSp6ku2g1st2oqq5C0t1zhCFng-LdNFvO6XGzjH4K3hs0-TA7CL8lcOSmXCEwAPDe6vwcnUSlzRZfX5Z7YossCZjMjO0pbS97KZpbCz_m54Hk4aa7P1ZSGXoPZO6ZGhIzgn2N_g/s400/eto_hebi_omochi.png',
      'https://cdn-ak.f.st-hatena.com/images/fotolife/M/MouseComputer/20240731/20240731110005.jpg',
      'https://cdn-ak.f.st-hatena.com/images/fotolife/M/MouseComputer/20240731/20240731110005.jpg',
    ],
  },
}

