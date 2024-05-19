/* eslint-disable react/prop-types */
export default function Header({author}) {
    return <h1>Hello, world! {author ? author : 'WPU'} 🚀</h1>;
  }