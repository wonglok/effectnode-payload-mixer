import { getNextPayloadUser } from '../../_shared/getPayloadAndUser'
import { checkAccess } from '../../_shared/roles'

export default async function Page() {
    const { payload, user } = await getNextPayloadUser()

    let canUse = await checkAccess({ user, level: 'teacher' })

    return (
        <>
            {`${JSON.stringify(canUse)}`}
            {user?.role}
        </>
    )
}
