# AI Studio Architecture

Version: 0.3.0

Status: Active

---

# Vision

AI Studio is a modular platform for building, managing and automating AI-powered creative projects.

The platform is designed to support multiple AI providers, reusable assets, persistent memory, project workspaces, automation pipelines and plugins without requiring changes to the application core.

The architecture follows strict separation of concerns and favors composition over inheritance.

---

# Architecture Principles

The project follows these principles:

- Single Responsibility Principle
- Dependency Inversion Principle
- Composition over Inheritance
- Modular Design
- Constructor Dependency Injection
- Explicit Lifecycle
- No Global State
- No Singletons
- Strict TypeScript

Every class must have one clearly defined responsibility.

---

# Project Structure

```
AI_STUDIO
│
├── automation/
├── config/
├── core/
├── docs/
├── memory/
├── output/
├── plugins/
├── providers/
├── workspace/
│
├── package.json
├── tsconfig.json
└── .gitignore
```

---

# Core

The Core module is the foundation of the entire application.

Core must remain small, stable and independent.

Core is responsible only for:

- application lifecycle
- dependency injection
- logging
- module management
- application startup
- application shutdown

Core must never contain business logic.

---

# Core Structure

```
core/src

app/
bootstrap/
container/
domain/
infrastructure/
logging/
modules/

main.ts
```

---

# Functional Modules

Everything that represents application functionality lives outside Core.

Current modules:

- Memory
- Workspace
- Providers
- Automation
- Plugins

Future modules may be added without modifying Core.

---

# Application Lifecycle

```
main()

↓

Bootstrap

↓

ServiceContainer

↓

ModuleRegistry

↓

Application

↓

Modules

↓

Ready
```

Shutdown follows the reverse order.

---

# Dependency Rules

Allowed:

```
Application
        ↓
Core
        ↓
Modules
        ↓
Providers
```

Not allowed:

- Providers depending on Core internals
- Modules depending on each other directly
- Circular dependencies
- Static service access
- Global variables

---

# Dependency Injection

All services are created by the ServiceContainer.

Classes never create their own dependencies.

Example:

GOOD

```
ProjectService
    ↓
ProjectRepository
```

BAD

```
ProjectService

new ProjectRepository()
```

Dependencies are always injected.

---

# Module System

Every functional subsystem is represented by a module.

Each module has its own:

- services
- repositories
- configuration
- initialization

Modules communicate through interfaces.

---

# Logging

All logging goes through Logger.

Direct usage of console.log outside Logger is forbidden.

---

# Error Handling

Errors must never be silently ignored.

Unexpected failures should:

- log the error
- preserve application stability
- provide meaningful messages

---

# Naming Convention

Classes

PascalCase

Example

ProjectRepository

Interfaces

Prefix with I only when multiple implementations exist.

Methods

camelCase

Variables

camelCase

Constants

UPPER_SNAKE_CASE only for true constants.

---

# File Rules

One public class per file.

File name must match class name.

Examples

```
Logger.ts

ProjectRepository.ts

Bootstrap.ts
```

---

# Code Rules

Allowed

✔ Small classes

✔ Constructor Injection

✔ Immutable dependencies

✔ Explicit lifecycle

✔ Interfaces

Forbidden

✘ Singleton

✘ Global state

✘ Static mutable data

✘ Circular dependencies

✘ Business logic inside Core

---

# Versioning

The project follows semantic versioning.

MAJOR

Breaking architectural changes.

MINOR

New functionality.

PATCH

Bug fixes.

---

# Development Workflow

Every release must:

1. Build successfully.

2. Start successfully.

3. Pass architecture review.

4. Be committed to Git.

Recommended workflow:

```
Architecture

↓

Implementation

↓

Build

↓

Test

↓

Commit
```

---

# Long-Term Goal

AI Studio should evolve into a scalable platform capable of integrating any AI provider, automation workflow or creative pipeline without requiring changes to the application core.

Core should remain stable while functionality grows through independent modules.