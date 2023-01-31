import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Input } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchInputProps {
  getPosts: (query?: string) => Promise<void>
}

export function SearchInput({ getPosts }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query)
  }

  return (
    <form onSubmit={handleSubmit(handleSearchPosts)}>
      <Input placeholder="Buscar conteúdo" {...register('query')} />
    </form>
  )
}
