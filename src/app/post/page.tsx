// app模式
async function getData() {
  const dt = new Date().toLocaleString()
  const response = await fetch('https://dummyjson.com/posts')
  const data = await response.json()

  return {
    dt,
    data: data.posts,
  }
}

// 预加载
// export const preload = () => {
//   // void evaluates the given expression and returns undefined
//   // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/void
//   void getData()
// }

const Page = async () => {
  // preload()
  const { dt, data } = await getData()
  return (
    <div>
      <h2>post</h2>
      {dt}
      {data?.map(({ title, id }: { title: string; id: string }) => (
        <li key={id}>
          <h4>{title}</h4>
        </li>
      ))}
    </div>
  )
}
export default Page

// pages模式
// export async function getServerSideProps() {}
