// app模式
async function getData(id: string) {
  const dt = new Date().toLocaleString()
  const response = await fetch(`https://dummyjson.com/posts?id=${id}`)
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

const Page = async ({ params }: { params: { postId: string } }) => {
  // preload()
  const { dt, data } = await getData(params.postId)
  // if (params.postId === '3') return '404'
  return (
    <div>
      <h2>postId{params.postId}</h2>
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

// 定义动态路由可以接受哪些id
export async function getStaticPaths() {
  return {
    paths: [{ params: { postId: '1' } }, { params: { postId: '2' } }],
    fallback: false,
  }
}
