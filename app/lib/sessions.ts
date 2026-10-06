export type Session = {
    state: string
    connected: boolean
}

export const sessions: Record<string, Session> = {}