export type StackType = "backend" | "frontend";

export type LevelType =
    | "debug"
    | "info"
    | "warn"
    | "error"
    | "fatal";

export type BackendPackageType =
    | "cache"
    | "controller"
    | "cron_job"
    | "db"
    | "domain"
    | "handler"
    | "repository"
    | "route"
    | "service";

export type FrontendPackageType =
    | "api"
    | "component"
    | "hook"
    | "page"
    | "state"
    | "style";

export type SharedPackageType =
    | "auth"
    | "config"
    | "middleware"
    | "utils";

export type PackageType =
    | BackendPackageType
    | FrontendPackageType
    | SharedPackageType;