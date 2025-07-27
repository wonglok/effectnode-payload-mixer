import { User } from '@/payload-types'

const roles = [
    {
        role: 'superadmin',
        power: 200,
    },
    {
        role: 'admin',
        power: 100,
    },
    {
        role: 'teacher',
        power: 90,
    },
    {
        role: 'student',
        power: 80,
    },
]

export const checkAccess = async ({
    user,
    level,
}: {
    user: User | null
    level: 'superadmin' | 'admin' | 'teacher' | 'student'
}) => {
    //
    const userRole = roles.find((r) => r.role === level) as { power: number }
    const requireRole = roles.find((r) => r.role === user?.role)

    if (requireRole && userRole) {
        if (requireRole?.power >= userRole?.power) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

//
