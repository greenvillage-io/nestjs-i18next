import { ModuleMetadata } from '@nestjs/common';
import { i18n, InitOptions, Resource } from 'i18next';

export interface AsyncInitOptions extends Pick<ModuleMetadata, 'imports'> {
    useFactory: (...args: any[]) => Promise<InitOptions | i18n> | InitOptions | i18n;
    inject?: any[];
}

export interface ForFeatureOptions {
    resources: Resource;
}

export interface AsyncForFeatureOptions extends Pick<ModuleMetadata, 'imports'> {
    name: string;
    useFactory: (...args: any[]) => Promise<ForFeatureOptions> | ForFeatureOptions;
    inject?: any[];
}
