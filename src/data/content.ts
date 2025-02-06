import i from "../img/1.jpeg";
import ii from "../img/2.jpeg";
import iii from "../img/3.jpeg";

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
      image: i,
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
      image: ii,
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
      image: iii,
      caption: "Joshita"
    },
    rightPage: {
    poem: `A glance, a whisper, a secret untold,
Soft skin glows like moonlight’s gold.
Her lips—ruby red, a silent sigh,
Curved like verses that make time lie.

Eyes lined with longing, dark and deep,
Where shadows dance and secrets keep.
A gaze that lingers, slow to part,
Like a song that hums against the heart.
.`,
      author: "Gyan"
    }
  }
];