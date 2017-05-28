import { Observable, ObservableInput } from '../Observable';
import { IScheduler } from '../Scheduler';
export declare function merge<T>(this: Observable<T>, scheduler?: IScheduler): Observable<T>;
export declare function merge<T>(this: Observable<T>, concurrent?: number, scheduler?: IScheduler): Observable<T>;
export declare function merge<T, T2>(this: Observable<T>, v2: ObservableInput<T2>, scheduler?: IScheduler): Observable<T | T2>;
export declare function merge<T, T2>(this: Observable<T>, v2: ObservableInput<T2>, concurrent?: number, scheduler?: IScheduler): Observable<T | T2>;
export declare function merge<T, T2, T3>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, scheduler?: IScheduler): Observable<T | T2 | T3>;
export declare function merge<T, T2, T3>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, concurrent?: number, scheduler?: IScheduler): Observable<T | T2 | T3>;
export declare function merge<T, T2, T3, T4>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, scheduler?: IScheduler): Observable<T | T2 | T3 | T4>;
export declare function merge<T, T2, T3, T4>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, concurrent?: number, scheduler?: IScheduler): Observable<T | T2 | T3 | T4>;
export declare function merge<T, T2, T3, T4, T5>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, scheduler?: IScheduler): Observable<T | T2 | T3 | T4 | T5>;
export declare function merge<T, T2, T3, T4, T5>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, concurrent?: number, scheduler?: IScheduler): Observable<T | T2 | T3 | T4 | T5>;
export declare function merge<T, T2, T3, T4, T5, T6>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, scheduler?: IScheduler): Observable<T | T2 | T3 | T4 | T5 | T6>;
export declare function merge<T, T2, T3, T4, T5, T6>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, concurrent?: number, scheduler?: IScheduler): Observable<T | T2 | T3 | T4 | T5 | T6>;
export declare function merge<T>(this: Observable<T>, ...observables: Array<ObservableInput<T> | IScheduler | number>): Observable<T>;
export declare function merge<T, R>(this: Observable<T>, ...observables: Array<ObservableInput<any> | IScheduler | number>): Observable<R>;
export declare function mergeStatic<T>(v1: ObservableInput<T>, scheduler?: IScheduler): Observable<T>;
export declare function mergeStatic<T>(v1: ObservableInput<T>, concurrent?: number, scheduler?: IScheduler): Observable<T>;
export declare function mergeStatic<T, T2>(v1: ObservableInput<T>, v2: ObservableInput<T2>, scheduler?: IScheduler): Observable<T | T2>;
export declare function mergeStatic<T, T2>(v1: ObservableInput<T>, v2: ObservableInput<T2>, concurrent?: number, scheduler?: IScheduler): Observable<T | T2>;
export declare function mergeStatic<T, T2, T3>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, scheduler?: IScheduler): Observable<T | T2 | T3>;
export declare function mergeStatic<T, T2, T3>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, concurrent?: number, scheduler?: IScheduler): Observable<T | T2 | T3>;
export declare function mergeStatic<T, T2, T3, T4>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, scheduler?: IScheduler): Observable<T | T2 | T3 | T4>;
export declare function mergeStatic<T, T2, T3, T4>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, concurrent?: number, scheduler?: IScheduler): Observable<T | T2 | T3 | T4>;
export declare function mergeStatic<T, T2, T3, T4, T5>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, scheduler?: IScheduler): Observable<T | T2 | T3 | T4 | T5>;
export declare function mergeStatic<T, T2, T3, T4, T5>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, concurrent?: number, scheduler?: IScheduler): Observable<T | T2 | T3 | T4 | T5>;
export declare function mergeStatic<T, T2, T3, T4, T5, T6>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, scheduler?: IScheduler): Observable<T | T2 | T3 | T4 | T5 | T6>;
export declare function mergeStatic<T, T2, T3, T4, T5, T6>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, concurrent?: number, scheduler?: IScheduler): Observable<T | T2 | T3 | T4 | T5 | T6>;
export declare function mergeStatic<T>(...observables: (ObservableInput<T> | IScheduler | number)[]): Observable<T>;
export declare function mergeStatic<T, R>(...observables: (ObservableInput<any> | IScheduler | number)[]): Observable<R>;
