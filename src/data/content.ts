export interface PageContent {
  id: string;
  leftPage: {
    image: string;
    caption: string;
  };
  rightPage: {
    poem: string;
    author: string;
  };
}

export const pages: PageContent[] = [
  {
    id: "main",
    leftPage: {
      image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&q=80",
      caption: "My Beautiful Rose"
    },
    rightPage: {
      poem: `In petals soft as morning light,
My love for you takes graceful flight.
Like roses blooming in the spring,
My heart to yours will always cling.

Each crimson fold, a story told,
Of passion's touch, both new and old.
In garden's sweet and tender air,
Our love blooms beyond compare.`,
      author: "Your Secret Admirer"
    }
  },
  {
    id: "second",
    leftPage: {
      image: "https://images.unsplash.com/photo-1548588627-f978862b85e1?auto=format&fit=crop&q=80",
      caption: "A Garden of Love"
    },
    rightPage: {
      poem: `Like roses dancing in the breeze,
Your love sets my heart at ease.
Each petal holds a memory dear,
Of moments when you're near.

Your beauty, like the morning rose,
In gentle grace forever glows.
In love's garden, pure and bright,
You're my endless sweet delight.`,
      author: "Forever Yours"
    }
  },
  {
    id: "third",
    leftPage: {
      image: "https://images.unsplash.com/photo-1548588627-f978862b85e1?auto=format&fit=crop&q=80",
      caption: "A Garden of Love"
    },
    rightPage: {
      poem: `Like roses dancing in the breeze,
Your love sets my heart at ease.
Each petal holds a memory dear,
Of moments when you're near.

Your beauty, like the morning rose,
In gentle grace forever glows.
In love's garden, pure and bright,
You're my endless sweet delight.`,
      author: "Forever Yours"
    }
  },
  {
    id: "fourth",
    leftPage: {
      image: "https://images.unsplash.com/photo-1548588627-f978862b85e1?auto=format&fit=crop&q=80",
      caption: "A Garden of Love"
    },
    rightPage: {
      poem: `Like roses dancing in the breeze,
Your love sets my heart at ease.
Each petal holds a memory dear,
Of moments when you're near.

Your beauty, like the morning rose,
In gentle grace forever glows.
In love's garden, pure and bright,
You're my endless sweet delight.`,
      author: "Forever Yours"
    }
  }
];