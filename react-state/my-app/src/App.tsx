import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const srcs: string[] = [
  'starry-sky.jpeg',
  'cool-car.jpg',
  'cool-kitty.jpg',
  'malinois-puppy.jpg',
  'bruce-dj.jpg',
];

const captions: string[] = [
  'A Beautiful Image of Space',
  'Corvette Concept',
  'Hipster Cat',
  'PUPPY!!!',
  'Be water, my friend. -Bruce Lee',
];

const descriptions: string[] = [
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  Aliquam incidunt sit dolorum accusantium sapiente reiciendis maxime dolores ullam delectus,
  commodi placeat eveniet, quam voluptates facere et magnam architecto quaerat velit voluptas
  rerum quos asperiores quis in ! Nemo aut aliquam quas dolore quaerat,
  error numquam odio modi eos vero. Modi nisi eos autem ? Iusto hic impedit aspernatur
  labore quos nesciunt ? Ad dolore pariatur aperiam nemo, maiores laboriosam quam quod nisi ipsum,
  dicta sunt laborum similique repellat?`,
  `Nam eu mauris faucibus, dignissim tortor nec, mollis quam. In lectus dui, pharetra interdum tellus vitae, viverra rutrum justo. Nullam ut nibh fringilla mi auctor sodales. Suspendisse ex nisl, sagittis ac tempus quis, egestas dignissim magna. Nam quis est turpis. Suspendisse efficitur commodo sem. Integer elementum condimentum quam quis fermentum. Mauris ut mauris nec nulla venenatis blandit quis ac nulla. Proin maximus fermentum erat, a condimentum augue. Etiam condimentum neque tellus, in tincidunt leo facilisis eu. In quis rutrum mi. Cras convallis luctus orci, sit amet pretium mi mollis quis. Maecenas suscipit, dolor non elementum auctor, odio ante placerat neque, non maximus ante odio eget nulla. Mauris enim diam, dapibus a laoreet et, mollis vel tellus. Quisque ex turpis, aliquam eget nulla non, volutpat blandit neque.`,
  `Morbi auctor dignissim quam in interdum. Sed ut venenatis enim. Fusce mollis, dolor vel rhoncus porttitor, velit lorem commodo diam, quis placerat erat risus maximus nulla. Suspendisse vitae sodales est. Donec pulvinar sit amet diam id dictum. Suspendisse semper gravida egestas. Fusce condimentum non nisi vitae pellentesque. Nullam interdum diam in augue blandit elementum. Sed aliquet, orci ut consequat faucibus, risus ipsum semper justo, eget scelerisque ligula sem quis elit. Praesent sed nisi rutrum, sodales sapien nec, feugiat massa. Suspendisse a fringilla dolor, sed eleifend enim. Fusce condimentum lectus ipsum, vel porttitor justo fringilla at. Donec laoreet ut mauris placerat ullamcorper. Proin dignissim felis a semper mattis.`,
  `Sed sed orci nunc. Sed in quam venenatis, egestas est ac, fermentum quam. Duis in magna dui. Mauris sit amet molestie massa. Phasellus lobortis sed urna et suscipit. Vivamus libero massa, rhoncus ut viverra non, hendrerit non libero. Donec aliquet lectus nulla, eget luctus nulla commodo id.`,
  `Aliquam est purus, consequat vel elit vel, ullamcorper auctor massa. Nullam odio enim, luctus et malesuada sed, ullamcorper sit amet est. Praesent et libero eleifend, bibendum lorem eu, semper neque. Sed nibh nisl, aliquet vulputate sodales eget, posuere non erat. Curabitur bibendum vitae est et consequat. Etiam egestas mi vitae ipsum porta, in mollis velit lacinia. Donec dui est, scelerisque id pulvinar sit amet, viverra vitae nulla. Ut commodo purus nulla, in semper tellus gravida quis. Mauris luctus orci vitae nibh euismod, vel rutrum ex egestas. Cras nec ipsum est. Phasellus euismod tortor nunc, vel molestie turpis sollicitudin in. Donec efficitur, mi eget gravida pulvinar, lectus risus maximus ipsum, a accumsan mi purus eget eros. Praesent hendrerit mauris ut pellentesque tincidunt. Ut porttitor nisl lacus, sed sodales lorem interdum sit amet.`,
];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image srcs={srcs} />
      <Caption captions={captions} />
      <Description descriptions={descriptions} />
      <Button label="Click for Next Image" />
    </>
  );
}
