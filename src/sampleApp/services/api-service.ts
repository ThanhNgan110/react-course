import type { ApiResponse } from '../types'

export class ApiService<T> {
	private resourceUrl: string

	constructor(urlApi: string, nameResource: string) {
		this.resourceUrl = `${urlApi}/${nameResource}`
	}

	async get(): Promise<ApiResponse<T>> {
		try {
			const response = await fetch(this.resourceUrl)

			if (!response.ok) {
				return {
					data: null,
					success: false,
					msg: `Get api error ${response.statusText}`,
				}
			}

			const data: T = await response.json()
			return {
				data,
				success: true,
			}
		} catch (error: unknown) {
			let msg = ''
			if (error instanceof Error) {
				msg = error.message
			}

			return {
				data: null,
				success: false,
				msg,
			}
		}
	}
}
