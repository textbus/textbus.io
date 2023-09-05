import { InjectionToken } from '@viewfly/core'
import { BehaviorSubject } from '@tanbo/stream'

export const ViewUpdateInjectionToken = new InjectionToken<BehaviorSubject<HTMLElement | null>>('ViewUpdateInjectionToken')
