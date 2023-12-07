// До
const emit = defineEmits<{
    (e: 'foo', id: number): void
    (e: 'bar', name: string, ...rest: any[]): void
  }>()

  // После
const emit = defineEmits<{
    foo: [id: number]
    bar: [name: string, ...rest: any[]]
  }>()