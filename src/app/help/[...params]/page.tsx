'use client'
// 在13版本中使用useRouter来获取动态路由的参数

const Page = ({ params }: { params: { params: any } }) => {
  const handleClick = () => {
    console.log('params', params.params)
  }

  return <div onClick={handleClick}>Page ...params {params.params.join('/')}</div>
}
export default Page
