<<<<<<< HEAD
---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' }
    ]
  },
 {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      我们的团队
    </template>
    <template #lead>
      光荣在于平淡，艰巨在于漫长。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="members" />
=======
---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' }
    ]
  },
 {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      我们的团队
    </template>
    <template #lead>
      光荣在于平淡，艰巨在于漫长。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="members" />
>>>>>>> 1143b0b8c1465ed55ae36b2b602035ac5ce26be3
</VPTeamPage>